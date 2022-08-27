package com.example.demo.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Test;


@Repository
public interface TestRepo extends JpaRepository<Test, Integer>{
	
	//SELECT * FROM tests WHERE name=? ;
	Optional<Test> findTestByName(String name);

	Test findByName(String test);

}
