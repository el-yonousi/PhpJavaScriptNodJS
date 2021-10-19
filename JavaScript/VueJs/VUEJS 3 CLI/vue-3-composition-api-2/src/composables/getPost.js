import { ref } from "@vue/reactivity"
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try
        {
            const data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok)
            {
                throw Error('no data available')
            }
            post.value = await data.json()
        } catch (err)
        {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPost