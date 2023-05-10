package com.example.demo.lectureClass.product.service;

import com.example.demo.lectureClass.product.controller.form.TestProductRequestForm;
import com.example.demo.lectureClass.product.entity.TestProduct;
import com.example.demo.lectureClass.product.reposiory.TestProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class TestProductServiceImpl implements TestProductService{

    final private TestProductRepository productRepository;

    @Override
    public TestProduct register(TestProductRequestForm requestForm) {
        return productRepository.save(requestForm.toTestProduct());
    }

}
