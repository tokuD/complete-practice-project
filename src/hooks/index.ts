import { useSetError, useSetMembers, useSetModal } from '@/providers'

export const useAddMember = () => {
  const setMembers = useSetMembers()
  return (username: string, age: number) =>
    setMembers((prev) => [{ id: Math.random(), username, age }, ...prev])
}

export const useDeleteMember = () => {
  const setMembers = useSetMembers()
  return (id: number) => {
    setMembers((prev) => prev.filter((member) => member.id !== id))
  }
}

export const useInputValidator = () => {
  const setError = useSetError()
  const setModal = useSetModal()
  return (username: string, age: number | '') => {
    let errors = []
    if (username.trim() === '') {
      errors.push('Please enter a valid name.')
    }
    if (age === '' || age <= 0) {
      errors.push('Please enter a valid age (>0).')
    }
    if (errors.length > 0) {
      setError({ name: 'Invalid input', description: errors })
      setModal(true)
      return false
    }
    return true
  }
}
