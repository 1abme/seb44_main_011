package com.seb44main011.petplaylist.domain.playlist.repository;

import com.seb44main011.petplaylist.domain.playlist.entity.MusicList;
import com.seb44main011.petplaylist.domain.playlist.entity.PersonalPlayList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PlaylistRepository extends JpaRepository<PersonalPlayList, Long> {
    Optional<PersonalPlayList> findByMember_MemberId(long memberId);
}