package com.example.demo.controller;

import java.util.List;

import org.hibernate.boot.model.naming.ImplicitNameSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.example.demo.entities.NewTest;
import com.example.demo.entities.Student;
import com.example.demo.entities.TestByStudent;
import com.example.demo.service.StudMngSysService;




@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StudMngSysController {
	
	@Autowired
	private StudMngSysService myService;
	
	@GetMapping(path="student")
	public Student getStudent(@RequestParam String username,
							  @RequestParam String password){
    	   return myService.getStudent(username,password);   
    }
	
	@GetMapping(path="oneStudent1")
	public Student getStudent(@RequestParam int id){
    	   return myService.viewStudent(id);   
    }
	
	@GetMapping(path="oneStudent2")
	public List<TestByStudent> getStudentProgress(@RequestParam int id){
    	  return myService.getStudentProgress(id);   
    }
	
	@PostMapping(path="register")
    public int registerNewStudent(@RequestBody Student student){
        return myService.addNewStudent(student);
    }
	
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping(path="insertTest")
    public int insertNewTest(@RequestBody NewTest newTest){
        return myService.insertNewTest(newTest);
    }
	
	@CrossOrigin(origins="http://localhost:3000")
	@DeleteMapping(path="del/{username}")
	public int deleteStudent(@PathVariable("username") String username ){
	    return  myService.deleteStudent(username);
	}

}
