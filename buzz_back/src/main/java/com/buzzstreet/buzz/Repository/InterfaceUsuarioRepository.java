package com.buzzstreet.buzz.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.buzzstreet.buzz.Models.Usuario;

public interface InterfaceUsuarioRepository extends JpaRepository<Usuario, Long>{

	List<Usuario> findByEmailContainsOrNameContains(String email,String name);
	
	
	

}
