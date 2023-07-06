package com.seb44main011.petplaylist.domain.comment.repository;

import com.seb44main011.petplaylist.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}