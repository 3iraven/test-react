package main

import (
    "encoding/json"
    "fmt"
    "github.com/golang-jwt/jwt"
    "net/http"
    "time"
)

var jwtKey = []byte("my_secret_key")

type CustomClaims struct {
    UserRole string `json:"userRole"`
    jwt.StandardClaims
}

// GenerateTokenHandler generates a JWT token for a given user role.
func GenerateTokenHandler(w http.ResponseWriter, r *http.Request) {
    userRole := r.URL.Query().Get("role")
    if userRole == "" {
        http.Error(w, "Role parameter is required", http.StatusBadRequest)
        return
    }

    // Create the Claims
    claims := CustomClaims{
        UserRole: userRole,
        StandardClaims: jwt.StandardClaims{
            ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    tokenString, err := token.SignedString(jwtKey)
    if err != nil {
        http.Error(w, "Error creating token", http.StatusInternalServerError)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
}

// VerifyHandler checks if the JWT token is valid and if the user role is authorized.
func VerifyHandler(w http.ResponseWriter, r *http.Request) {
    tokenStr := r.URL.Query().Get("token")
    if tokenStr == "" {
        http.Error(w, "Token parameter is required", http.StatusBadRequest)
        return
    }

    token, err := jwt.ParseWithClaims(tokenStr, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
        return jwtKey, nil
    })

    if err != nil {
        http.Error(w, "Invalid token", http.StatusUnauthorized)
        return
    }

    if claims, ok := token.Claims.(*CustomClaims); ok && token.Valid {
        if claims.UserRole == "admin" {
            fmt.Fprintln(w, "User is authorized.")
        } else {
            fmt.Fprintln(w, "User is not authorized.")
        }
    } else {
        http.Error(w, "Invalid token", http.StatusUnauthorized)
    }
}

func main() {
    http.HandleFunc("/generate-token", GenerateTokenHandler)
    http.HandleFunc("/verify", VerifyHandler)

    fmt.Println("Server is running on port 8080...")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println("Failed to start server:", err)
    }
}
