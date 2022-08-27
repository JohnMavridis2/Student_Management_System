package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.NewTest;
import com.example.demo.entities.Student;
import com.example.demo.entities.Test;
import com.example.demo.entities.TestByStudent;
import com.example.demo.entities.TestsDone;
import com.example.demo.repos.StudentRepo;
import com.example.demo.repos.TestRepo;
import com.example.demo.repos.TestsDoneRepo;



@Service
public class StudMngSysService {
	
	@Autowired
	private StudentRepo studentRepo;
	
	@Autowired
	private TestRepo testRepo;

	@Autowired
	private TestsDoneRepo testsDoneRepo;
	
	public Student getStudent(String username,String password) {
		return studentRepo.findStudent(username,password);
	}

	public Student viewStudent(int id) {
		return studentRepo.viewStudent(id);
	}

	public int addNewStudent(Student student) {
		Optional<Student> studentOptional=studentRepo.findStudentByUsername(student.getUsername());
        if (studentOptional.isPresent()){
            return 1;
        }
        studentRepo.save(student);
        return 0;
	}

	public List<TestByStudent> getStudentProgress(int id) {
		
		List<TestByStudent> list=new ArrayList<TestByStudent>();
				
		 studentRepo.getStudentProgress(id).forEach((e) -> { 
		 	list.add(new TestByStudent(e.getTs(),e.getName(),e.getGrade()));				 
		 });
		
		 return list;
	}
	
	@Transactional
	public int deleteStudent(String username) {
		Optional<Student> studentOptional=studentRepo.findStudentByUsername(username);
        if (!studentOptional.isPresent()){
            return 1;
        }
        studentRepo.deleteByUsername(username);
        return 0;
	}

	@Transactional
	public int insertNewTest(NewTest newTest) {
		int testId;
        Student student=studentRepo.findByUsername(newTest.getUsername());
        if (student==null) {return 1;}
        int studentId=student.getId();
        float studentAvg=student.getAverage_grade();
        Test test=testRepo.findByName(newTest.getTest());
        if(test==null) {
        	test=new Test(newTest.getTest());
        	testRepo.save(test);
        	test=testRepo.findByName(newTest.getTest());
        	testId=test.getId();
        }else {
        	testId=test.getId();
        }
        TestsDone testDone=new TestsDone(studentId,testId,newTest.getGrade(),newTest.getTimeStamp());
        testsDoneRepo.save(testDone);
        return 0;
	}


}

