package com.learnspringboot.todo.jwt;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/authenticate")
    public String authenticate(@RequestBody AuthRequest request) {
        // Assuming there's only one user for simplicity
        if ("archie".equals(request.getUsername()) && "abc123".equals(request.getPassword())) {
            return JwtUtil.generateToken(request.getUsername());
        } else {
            throw new UnauthorizedException("Invalid credentials");
        }
    }

    private static class AuthRequest {
        private String username;
        private String password;

        // getters and setters

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    private static class UnauthorizedException extends RuntimeException {
        public UnauthorizedException(String message) {
            super(message);
        }
    }
}
