export const useCustomLoadingIndicator = () => {
  // State untuk tracking status loading
  const isLoading = useState<boolean>('isLoading', () => false)

  // Fungsi untuk mengatur status loading
  const setLoading = (value: boolean) => {
    isLoading.value = value
  }

  return {
    isLoading,
    setLoading
  }

}
