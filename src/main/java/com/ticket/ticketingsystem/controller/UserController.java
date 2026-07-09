package com.ticket.ticketingsystem.controller;

import com.ticket.ticketingsystem.entity.User;
import com.ticket.ticketingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Register user
    @PostMapping
    public User registerUser(@RequestBody User user) {

        return userService.registerUser(user);

    }

    // Get all users
    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();

    }

    // Get user by email
    @GetMapping("/{email}")
    public User getUserByEmail(@PathVariable String email) {

        return userService.getUserByEmail(email);

    }

}