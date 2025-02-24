export const createInitials = (fullname: string) => {
    return fullname
        .split(" ")
        .filter(word => word.length > 1)
        .map(word => word[0].toUpperCase())
        .join("") || fullname[0].toUpperCase();

}