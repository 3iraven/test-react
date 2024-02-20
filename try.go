// employee_controller_test.go

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

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
    }

    expected := []Employee{
        {ID: "1", Name: "John Doe", Email: "john@example.com"},
        {ID: "2", Name: "Jane Doe", Email: "jane@example.com"},
    }
    var actual []Employee
    if err := json.NewDecoder(rr.Body).Decode(&actual); err != nil {
        t.Fatal(err)
    }

    if len(actual) != len(expected) {
        t.Errorf("handler returned unexpected body: got %v want %v", actual, expected)
    }
}
