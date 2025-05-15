import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, published_at, reading_time_minutes, body_html, tags,url } = blog;

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            {cover_image && (
                <img 
                    src={cover_image} 
                    alt={title} 
                    className="rounded-lg w-full object-cover h-64 mb-8"
                />
            )}

            <div className="space-y-4">
                <div className="flex flex-wrap gap-2 border-t pt-6 border-dashed border-gray-300">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-sm hover:underline bg-blue-600 text-white"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <a href={url} target='_blank' className="text-4xl font-bold text-base-content hover:underline">{title}</a>
                <p className="text-sm text-gray-600">
                    Published on {new Date(published_at).toLocaleDateString()} • {reading_time_minutes} min read
                </p>
            </div>

            <div className="prose max-w-none break-words overflow-x-auto text-base-content">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {body_html}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Content;
