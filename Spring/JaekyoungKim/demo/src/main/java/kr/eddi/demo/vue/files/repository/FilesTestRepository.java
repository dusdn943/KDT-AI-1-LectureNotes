package kr.eddi.demo.vue.files.repository;

import kr.eddi.demo.vue.files.entity.FileTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilesTestRepository extends JpaRepository<FileTest,Long> {
}
