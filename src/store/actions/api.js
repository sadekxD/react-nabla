export const BASE_URL = "http://127.0.0.1:8000";

export const videoListURL = () => `${BASE_URL}/api/file-list/`;
export const videoDetailURL = (id) => `${BASE_URL}/api/file-list/${id}/`;

export const searchVideosURL = (title) =>
	`${BASE_URL}/api/file-list?search=${title}`;
