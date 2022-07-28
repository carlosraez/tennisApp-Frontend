
/**
 * @description Get the environment variables
 * @returns {string}
 */
export const getEnvVariables = () => {
    import.meta.env

  return {
    ...import.meta.env
  }
}
