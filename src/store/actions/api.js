export const BASE_URL = "http://127.0.0.1:8000";

export const videoListURL = () => `${BASE_URL}/api/file-list/`;
export const videoDetailURL = (id) => `${BASE_URL}/api/file-list/${id}/`;

export const searchVideosURL = (title) =>
	`${BASE_URL}/api/file-list?search=${title}`;

export const categoryVideosURL = (category) =>
	`${BASE_URL}/api/file-list?category=${category}`;

export const creatorListURL = () => `${BASE_URL}/api/profile-list/`;
export const creatorsByCategoryURL = (category) =>
	`${BASE_URL}/api/profile-list?category=${category}`;
export const creatorDetail = (id) => `${BASE_URL}/api/profile-list/${id}/`;
