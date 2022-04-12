export const setType = (type) => sessionStorage.setItem("type", type);
export const getType = () => sessionStorage.getItem("type") || "Home";
export const removeType = () => sessionStorage.removeItem("type");
