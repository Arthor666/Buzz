package com.buzzstreet.buzz.ResController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.buzzstreet.buzz.DTO.ResponseDTO;
import com.buzzstreet.buzz.Models.Usuario;
import com.buzzstreet.buzz.Repository.InterfaceUsuarioRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ApiRestController {
	
	@Autowired
	private InterfaceUsuarioRepository usuarioRepository;
	
	
	
	public ApiRestController(InterfaceUsuarioRepository usuarioRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
	}

	@GetMapping("/users")
	public List<Usuario> getAllUsers() {
		return usuarioRepository.findAll();
	}
	
	@GetMapping("/users/{nameOrEmail}")	
	public List<Usuario>getUsersByNameOrCorreo(@PathVariable("nameOrEmail") String nameOrEmail){		
		return usuarioRepository.findByEmailContainsOrNameContains(nameOrEmail, nameOrEmail);
	}
	
	@PostMapping("/users")
	public Usuario addUsuario(@RequestBody Usuario nuevoUsuario) {
		return usuarioRepository.save(nuevoUsuario);
	}
	
	
	@DeleteMapping("/users/{id}")
	public ResponseDTO deleteUsuario(@PathVariable(value="id") Long id) {
		 if(usuarioRepository.existsById(id)) {
			 usuarioRepository.deleteById(id); 
			 return new ResponseDTO("",true);
		 }		
		return new ResponseDTO("User not found",false);
	}

}
