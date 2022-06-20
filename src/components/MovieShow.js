import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieShow({movies}) {
    // Acces the params from the url
    const params = useParams();

    return (
        <div>
            <h3>{movies[params.movieId].title}</h3>
        </div>
    )
}
