package com.example.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.TestsDone;

@Repository
public interface TestsDoneRepo extends JpaRepository<TestsDone, Integer> {
	
	

}
