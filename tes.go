package main

import (
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestGetEmployees(t *testing.T) {
    req, err := http.NewRequest("GET", "/employees", nil)
    if err != nil {
        t.Fatal(err)
    }

    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(getEmployees)

    handler.ServeHTTP(rr, req)

    // Check for HTTP status code 200 (OK).
    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
    }

    // Check that the response body is not empty.
    if rr.Body.String() == "" {
        t.Error("handler returned an empty body")
    }

    // Optionally, check that the body can be decoded into a slice of Employee,
    // without enforcing exact match of the slice content.
    var employees []Employee
    if err := json.NewDecoder(rr.Body).Decode(&employees); err != nil {
        t.Fatalf("failed to decode response body: %v", err)
    }

    // Check that we got some employees back.
    if len(employees) == 0 {
        t.Error("expected non-empty list of employees")
    }
}
