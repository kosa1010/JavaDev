package com.kosa1010.controller;

import com.kosa1010.model.User;
import com.kosa1010.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


/**
 * Created by kosa1010 on 16.12.16.
 */
@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping
    @RequestMapping("/add")
    public ResponseEntity add(@RequestBody User user) {
        return new ResponseEntity(userRepository.add(user), HttpStatus.ACCEPTED);
    }

    @GetMapping
    @RequestMapping("all")
    public ResponseEntity findAll() {
        return new ResponseEntity(userRepository.findAll(), HttpStatus.OK);
    }


    @DeleteMapping("{id}")
    public ResponseEntity deleteUser(@PathVariable("id") long id) {
        return userRepository.deleteUser(id);
    }

    @GetMapping("{id}")
    public ResponseEntity<?> showUser(@PathVariable("id") long id) {
        User user = userRepository.findUser(id);
        if (user == null)
            return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);
        return new ResponseEntity(userRepository.findUser(id), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity editUser(@RequestBody User u, @PathVariable("id") long id) {
        return userRepository.editUser(id, u);
    }
}
