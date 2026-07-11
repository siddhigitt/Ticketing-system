package com.ticket.ticketingsystem.controller;

import com.ticket.ticketingsystem.dto.LoginRequest;
import com.ticket.ticketingsystem.entity.User;
import com.ticket.ticketingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {

        return userService.login(
                request.getEmail(),
                request.getPassword()
        );
    }
}