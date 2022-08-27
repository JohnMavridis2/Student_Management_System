package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tests_done")
@IdClass(StudentIdAndTestId.class)
public class TestsDone {
	
	@Id
	@Column(name = "student_id")
	private int student_id;
	
	@Id
	@Column(name = "test_id")
	private int test_id;
    
	@Column(name = "grade")
	private float grade;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	@Column(name = "time_stamp")
	private Date time_stamp;
	
	
	
}


