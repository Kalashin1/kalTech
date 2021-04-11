export const getters = {
  getLesson: (state) => (language, topic) => {
    const lesson = state[language].find(lesson => lesson.topic === topic)
    return lesson
  }
}
