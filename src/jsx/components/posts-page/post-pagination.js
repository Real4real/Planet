// import React from 'react'

// const PostPagination = ({ postsPerPage, totalPosts }) => {
//     const pageNubmers = [];

//     for (let index = 0; index <= Math.ceil(totalPosts / postsPerPage); index++) {
//         pageNubmers.push(index)
//     }
    
//     return (
//             <ul classNameName="pagination pagination-lg">
//                 {pageNubmers.map(number => {
//                     <li classNameName="page-item disabled"
//                         key={number}>
//                         <a href="!#" classNameName="page-link">{number}</a>
//                     </li>
//                 })}
                
//             </ul>
//     )
// };
// export default PostPagination;
import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for (let index = 1; index <= Math.ceil(totalPosts/postsPerPage); index++) {
        pageNumbers.push(index) 
    }

    return (
        <div>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)}
                            className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pagination
