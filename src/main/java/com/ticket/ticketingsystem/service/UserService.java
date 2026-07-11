package com.ticket.ticketingsystem.service;

import com.ticket.ticketingsystem.entity.User;
import com.ticket.ticketingsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register a new user
    public User registerUser(User user) {

        return userRepository.save(user);

    }

    // Get all users
    public List<User> getAllUsers() {

        return userRepository.findAll();

    }

    // Get user by email
    public User getUserByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

    }

    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

}