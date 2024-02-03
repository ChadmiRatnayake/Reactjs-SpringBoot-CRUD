package com.chadmi.SpringBootBackend.repository;

import com.chadmi.SpringBootBackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {



}
