package aprsppractice.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import aprsppractice.jpa.Porudzbina;

public interface PorudzbinaRepository extends JpaRepository<Porudzbina, Integer>{
	
	Collection<Porudzbina> findByPlacenoTrue();

}
