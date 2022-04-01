import { useEffect } from 'react'
import authFetch from '../axios/interceptors'
const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
	const fetchData = async () => {
		console.log('axios interceptors')
		try {
			const res = authFetch('/react-store-prsoducts')
		} catch (error) {}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
