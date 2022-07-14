import { Html,Head,Main,NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="blog and products" />
                <Head />
            </head>
            <body className='dark:bg-gray-800'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}