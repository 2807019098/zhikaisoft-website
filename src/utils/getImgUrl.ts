export const getImgUrl = (path: string) => {
    if (!path) return "";
    if (/^https?:\/\//.test(path)) return path;
    return (process.env.NEXT_PUBLIC_IMG_DOMAIN || "") + path;
}; 