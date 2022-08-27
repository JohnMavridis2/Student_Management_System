package com.example.demo.repos;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.ProgressIf;
import com.example.demo.entities.Student;



@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
	
	@Query(value = "SELECT * FROM students WHERE username=:username AND pass_word=:password",
	       nativeQuery = true)
	Student findStudent(String username, String password);
	
	@Query(value = "SELECT * FROM students WHERE students.id=:id ",
		    nativeQuery = true)
	Student viewStudent(int id);
	
	//SELECT * FROM students WHERE username=? ;
	Optional<Student> findStudentByUsername(String username);

	@Query(value = """
					SELECT t_d.time_stamp AS ts , t.name AS name , t_d.grade AS grade
					FROM tests AS t INNER JOIN tests_done AS t_d ON t.id=t_d.test_id
					WHERE t_d.student_id = :id
					ORDER BY ts ASC
				   """,
		    nativeQuery = true)
	List<ProgressIf> getStudentProgress(int id);
	
	//DELETE FROM students WHERE username=?
	void deleteByUsername(String username);
	

	Student findByUsername(String username);
	

}
