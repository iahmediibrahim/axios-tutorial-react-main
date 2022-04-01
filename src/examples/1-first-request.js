import axios from 'axios'
import { useCallback, useEffect } from 'react'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
	const fetchData = useCallback(async () => {
		try {
			const res = await axios(url)
			console.log(res.data)
		} catch (error) {
			console.log(error.response)
		}
	}, [])

	useEffect(() => {
		fetchData()
		console.log('first axios request')
	}, [fetchData])

	return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
