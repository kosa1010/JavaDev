package com.kosa1010.model;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by kosa1010 on 16.12.16.
 */
@Entity

public class User {

    @Id
    @GeneratedValue
    @NotNull
    private long id;
    @Size(min = 3, max = 20)
    @NotEmpty(message = "Name must not be null")
    private String name;
    @Size(min = 3, max = 20)
    private String surname;
    @DecimalMin("15")
    @DecimalMax("140")
    private int age;
    @DecimalMin("0.0")
    private double salary;
    @Email
    @Size(min = 9, max = 30)
    @Column(unique = true)
    private String email;

    public User() {
    }

    public User(String name) {
        this.name = name;
    }

    public User(int age) {
        this.age = age;
    }

    public User(double salary) {
        this.salary = salary;
    }

    public User(String name, String surname, int age, double salary, String email) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
