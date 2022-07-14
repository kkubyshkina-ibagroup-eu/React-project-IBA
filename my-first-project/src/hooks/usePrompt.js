const usePrompt = (title, delay) => {
  setTimeout(() => {
    const response = prompt(title);
    return response;
  }, delay);
};
export default usePrompt;
