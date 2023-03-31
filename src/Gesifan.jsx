import React from 'react'
import './Gesifan.css'
import human from '../src/notice-human.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Gesifan = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'center' }}>
      <div className='gesifan-box1'>
        <div>
            <p style={{fontSize : '30px'}}>소통공간 <strong>, 대전과 함께!</strong></p>
            <p style={{fontSize : '19px'}}>   시민들의 목소리를 <strong>경청하는 대전</strong>!</p>
        </div>
        <div style={{display :'flex'}}>
            <div>
              <img style={{width : '200px'}} src={human} alt="human" />  
            </div>
            <div className='gesifan-box2'>
               <div style={{marginTop:'20px'}}>
                 <span>칭찬합니다</span>
                 <span>다양한질문</span>
               </div> 
               <div style={{marginTop:'30px'}}>
                 <span>문의합니다</span>
                 <span>해주세요 </span>
               </div>
               <div style={{marginTop:'80px' , border : '1px solid red' , textAlign : 'end'}}> 
                 <button>게시글 작성하러 가기</button>
               </div> 
            </div>
        </div>      
      </div> 


      <div className='gesifan-box3'>
        <div style={{display : 'flex' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
                <div style={{position : 'relative',marginLeft : '20px', marginTop : '20px'}}>
                    <span>조회수 높은 글</span><span><img style={{width : '20px' , position : 'absolute' ,right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <span>조회수 높은 글</span><span><img style={{width : '20px' , position : 'absolute',right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
        </div>
        <div style={{display : 'flex' , marginTop : '20px'}}>
            <div className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <span>조회수 높은 글</span><span><img style={{width : '20px' , position : 'absolute' ,right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
            <div style={{marginLeft : '10px'}} className='gesifan-box5'>
            <div style={{position : 'relative',marginLeft : '20px' , marginTop : '20px'}}>
                    <span>조회수 높은 글</span><span><img style={{width : '20px' , position : 'absolute' ,right : '10px' }} src='moresee-arrow.png' alt="arrow" /></span>
                    <p>칭찬합니다</p>
                    <p>제목 : DW503 이예진 선생님 최고!</p>
                </div>
            </div>
        </div>
      </div>  

    </div>
  )
}

export default Gesifan