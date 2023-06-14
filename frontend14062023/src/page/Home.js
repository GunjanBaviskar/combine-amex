import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Home() {
  return (

    <div>
    <span>
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://images-eu.ssl-images-amazon.com/images/I/51hV5vGr4AL._AC_UL600_SR600,600_.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>The 7 Habits of Highly Effective People.</MDBCardTitle>
          <MDBCardText>
          The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen R. Covey. Wikipedia
          </MDBCardText>
          <MDBCardText>
          <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='top'">
            Read More
          </button>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8OVJidzSKKVk2PnWPd2YYC6eJrZ19EhCtZ6KpRqUaHev9gC5ho-JtUUhAgo1-OirRgo&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Think and Grow Rich</MDBCardTitle>
          <MDBCardText>
          Think and Grow Rich is a book written by Napoleon Hill released in 1937 and promoted as a personal development and self-improvement book.
          </MDBCardText>
          <MDBCardText>
          <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='top'">
            Read More
          </button>
            
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='data:image/jpeg;base64,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' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Ikigai</MDBCardTitle>
          <MDBCardText>
          INTERNATIONAL BESTSELLER • 1.5 MILLION+ COPIES SOLD WORLDWIDE“Workers looking for more fulfilling positions should start by identifying their ikigai.” 
          </MDBCardText>
          <MDBCardText>
          <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='bottom' ">
            Read More
          </button>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </span>

    <span>
    <MDBCardGroup>
    <MDBCard>
      <MDBCardImage src='data:image/jpeg;base64,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' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardTitle>Life's Amazing Secrets</MDBCardTitle>
        <MDBCardText>
        Stop going through life, Start growing through life! While navigating their way through Mumbai's horrendous traffic, Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness.
       </MDBCardText>
        <MDBCardText>
        <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='top'">
          Read More
        </button>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBCard>
      <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4COFYXbbWe3Lyez_obrfJ0LlQvwcjr2Nz1A&usqp=CAU' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardTitle>The alchemist</MDBCardTitle>
        <MDBCardText>
        The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller</MDBCardText>
        <MDBCardText>
        <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='top'">
          Read More
        </button>
          
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBCard>
      <MDBCardImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWv_8k1TzxNw78GJbUur2X6QYIgi9LG1eBENuC699wQzrWdQjCPtJ0Q1TfMbXAdGuc0s&usqp=CAU' alt='...' position='top' />
      <MDBCardBody>
        <MDBCardTitle>The Bhagwatgeeta</MDBCardTitle>
        <MDBCardText>
        The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture, which is part of the epic Mahabharata. It forms the chapters 23–40 of book 6 of the Mahabharata called the Bhishma Parva.
        </MDBCardText>
        <MDBCardText>
        <button className="w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4 position='bottom' ">
          Read More
        </button>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCardGroup>
  </span>
  </div>
  );
}