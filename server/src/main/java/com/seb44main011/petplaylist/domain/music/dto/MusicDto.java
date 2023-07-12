package com.seb44main011.petplaylist.domain.music.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

public class MusicDto {


    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PostRequest {
        @NotNull(message = "공백이 올 수 없습니다.")
        private long musicId;

    }
    @Getter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class DeleteRequest {
        @NotNull(message = "공백이 올 수 없습니다.")
        private long musicId;

    }

    @Getter
    @Builder
    public static class PublicResponse{
        @Setter
        private Long musicId;
        private String title;
        private String music_url;
        private String image_url;
        private String playtime;
        private String tags;

    }

    @Getter
    @Builder
    public static class ApiResponse{
        private Long musicId;
        private String title;
        private String music_url;
        private String image_url;
        private String playtime;
        private String tags;
        private boolean liked;

    }
}
