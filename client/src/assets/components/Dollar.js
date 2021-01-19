import React from 'react';

export default ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <g fill="none" fillRule="evenodd">
            <g>
                <g>
                {/* "#000" */}
                    <path d="M0 0H48V48H0z" transform="translate(-1478 -376) translate(1478 376)"/>
                    <g fill={color} fillRule="nonzero">
                        <path d="M20 40.21c0 .593-.382.79-.956.79C11.971 38.631 7 31.92 7 24.026 7 16.13 11.97 9.42 19.044 7.05c.574-.197.956.198.956.79v1.381c0 .395-.191.79-.574.987-5.544 2.171-9.367 7.5-9.367 13.817 0 6.316 4.015 11.842 9.367 13.816.383.197.574.592.574.987v1.381zm5.22-5.145c0 .392-.382.783-.764.783h-1.53c-.382 0-.764-.391-.764-.783v-2.35c-3.06-.392-4.588-2.154-5.162-4.7 0-.392.191-.784.574-.784h1.72c.382 0 .574.196.765.588.382 1.37 1.147 2.546 3.632 2.546 1.912 0 3.25-.98 3.25-2.546 0-1.567-.765-2.154-3.441-2.546-4.015-.588-5.926-1.763-5.926-5.092 0-2.546 1.911-4.504 4.588-4.896v-2.35c0-.392.382-.783.764-.783h1.53c.382 0 .765.391.765.783v2.35c2.294.392 3.823 1.763 4.205 3.917 0 .392-.19.783-.573.783h-1.53c-.382 0-.573-.196-.764-.587-.383-1.371-1.338-1.959-3.059-1.959-1.912 0-2.868.98-2.868 2.35 0 1.371.574 2.155 3.442 2.546 4.014.588 5.926 1.763 5.926 5.092 0 2.546-1.912 4.7-4.78 5.288v2.35zm3.736 5.884c-.574.197-.956-.198-.956-.79v-1.381c0-.395.191-.79.574-.987 5.544-2.171 9.367-7.5 9.367-13.817 0-6.316-4.015-11.842-9.367-13.816-.383-.197-.574-.592-.574-.987V7.79c0-.593.382-.79.956-.79C35.838 9.369 41 16.08 41 23.974c0 7.895-4.97 14.606-12.044 16.975z" transform="translate(-1478 -376) translate(1478 376)"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    )
}
