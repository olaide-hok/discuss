import PostList from '@/components/posts/post-list'
import {fetchPostsBySearchTerm} from '@/db/queries/posts'
import {redirect} from 'next/navigation'

interface SearchPageProps {
    searchParams: {
        term: string
    }
}

const SearchPage = async ({searchParams}: SearchPageProps) => {
    const {term} = searchParams
    if (!term) {
        redirect('/')
    }
    return (
        <div>
            <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
        </div>
    )
}

export default SearchPage
