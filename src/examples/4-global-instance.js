import axios from 'axios'
import { useEffect } from 'react'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
	const fetchData = async () => {
		console.log('global axios instance')
		try {
			const res = await axios(productsUrl)
			const res2 = await axios(randomUserUrl)
			console.log(res)
			console.log(res2)
		} catch (error) {
			console.log(error.response)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
