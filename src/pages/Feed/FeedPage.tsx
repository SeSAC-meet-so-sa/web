import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { FeedButton } from "@/components/ui/Button";
import { IoHeart } from "react-icons/io5";
import test from "/src/assets/test/testImage.png";
import happy from "/src/assets/mood/happy.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "/node_modules/swiper/swiper.css";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6.875rem auto;
  padding: 0rem 1.25rem;
  gap: 4.125rem;
  align-items: center;
  height: 100vh;
`;

const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--main-text);
  font-size: 1.5rem;
  font-weight: var(--font-medium);
  gap: 2.25rem;
  width: 100%;

  @media (max-width: 390px) {
    font-size: 1.125rem;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--line-green);
  border-radius: 2.5rem;
  background-color: var(--feed-searchbar);
  padding: 1.375rem 1.875rem;
  width: 100%; /* 기본적으로 부모 컨테이너를 채우도록 설정 */
  max-width: 35.5rem; /* 최대 너비 */
  min-width: 17.5rem; /* 최소 너비 */
  height: 4.25rem; /* 기본 높이 */
  gap: 0.5rem;
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);

  @media (max-width: 390px) {
    padding: 0.75rem 1.125rem;
    height: 2.625rem; /* 더 작은 화면에서 높이 조정 */
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 1.25rem;
  font-weight: var(--font-regular);

  &::placeholder {
    color: var(--search-placeholder);
    font-size: 1.25rem;
    font-weight: var(--font-regular);
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;

    &::placeholder {
      font-size: 0.875rem;
    }
  }
`;

const SearchButton = styled.button`
  display: flex;
`;

const SearchIcon = styled(IoSearch)`
  color: var(--search-placeholder);
  font-size: 1.5rem;

  @media (max-width: 390px) {
    font-size: 0.875rem;
  }
`;

const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  max-width: 75rem;
  align-items: center;
  width: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 390px) {
    gap: 0.75rem;
  }
`;

const PostContainer = styled.div`
  display: grid;
  margin-bottom: 2.5rem;
  grid-template-columns: repeat(4, 1fr); /* 기본 1줄에 4개 */
  gap: 2rem;
  width: 100%;

  @media (max-width: 781px) {
    grid-template-columns: repeat(2, 1fr); /* 1줄에 2개 */
  }

  @media (max-width: 390px) {
    grid-template-columns: repeat(2, 1fr); /* 1줄에 2개 */
    row-gap: 1.5rem;
    column-gap: 1rem;
  }
`;

const PostItem = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 17.25rem;
  height: auto;
  background-color: var(--white);
  padding-bottom: 0.75rem;
  border: 1px solid var(--line-diary);
  border-radius: 0.625rem;
  text-align: center;
  gap: 0.75rem;
  box-shadow: 0.125rem 0.125rem 0.5rem 0rem rgba(0, 0, 0, 0.25);

  @media (max-width: 781px) {
    margin: auto;
  }

  @media (max-width: 390px) {
    width: 11rem;
    padding-bottom: 0.5rem;
  }
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black);
  font-size: 1.125rem;
  font-weight: var(--font-medium);
  text-align: start;
  padding: 0 1rem;

  @media (max-width: 390px) {
    font-size: 0.875rem;
    padding: 0 0.75rem;
  }
`;

const MoodImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;

  @media (max-width: 390px) {
    width: 1rem; /* 작은 화면에 적응 */
    height: 1rem;
  }
`;

const PostText = styled.div`
  color: var(--diary-text);
  text-overflow: ellipsis;
  font-size: 1rem; /* 화면 크기에 따라 폰트 크기 조정 */
  font-weight: var(--font-regular);
  text-align: start;
  line-height: 1.5;
  padding: 0 1rem;

  @media (max-width: 390px) {
    font-size: 0.75rem;
    padding: 0 0.75rem;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PostInfoWrap = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0 1rem;

  @media (max-width: 390px) {
    padding: 0 0.75rem;
  }
`;

const PostInfo = styled.div`
  color: var(--text-03);
  font-size: 0.875rem;
  font-weight: var(--font-regular);

  @media (max-width: 390px) {
    font-size: 0.625rem;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: 390px) {
    padding: 0 0.75rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  color: var(--black);
  font-size: 0.875rem;
  font-weight: var(--font-medium);
  align-items: center;

  @media (max-width: 390px) {
    font-size: 0.625rem;
  }
`;

const UserImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 390px) {
    width: 1rem;
    height: 1rem;
  }
`;

const LikeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  color: var(--diary-text);
  font-size: 0.875rem;
  font-weight: var(--font-regular);
  align-items: center;

  @media (max-width: 390px) {
    font-size: 0.625rem;
  }
`;

const LikeIcon = styled(IoHeart)`
  color: var(--diary-text);
  font-size: 0.875rem;

  @media (max-width: 390px) {
    font-size: 0.625rem;
  }
`;

const SwiperWrap = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9; /* 비율 유지 */
  border-radius: 0.625rem 0.625rem 0 0;
`;

const SwiperImage = styled.img`
  width: 100%;
  height: 10.375rem;
  object-fit: cover;
  border-radius: 0.5625rem 0.5625rem 0 0;

  @media (max-width: 390px) {
    height: 6.5rem;
  }
`;

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("Latest");

  const TabItems = [
    { key: "Latest", label: "최신" },
    { key: "Popular", label: "인기" },
  ];

  return (
    <>
      <Layout>
        <SearchBarWrap>
          흥미로운 이야기를 발견해 보세요!
          <SearchBarContainer>
            <SearchInput type="text" placeholder="기억에 남는 질문이 있나요?" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBarContainer>
        </SearchBarWrap>
        <PostWrap>
          <ButtonWrap>
            {TabItems.map((menu) => (
              <FeedButton
                key={menu.key}
                isClicked={activeTab !== menu.key}
                onClick={() => setActiveTab(menu.key)}
              >
                {menu.label}
              </FeedButton>
            ))}
          </ButtonWrap>
          <PostContainer>
            <PostItem to="/Page1">
              <SwiperWrap>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                </Swiper>
              </SwiperWrap>
              <PostTitle>
                나의 단점 중 하나를 고칠 수...
                <MoodImage src={happy} alt="happy" />
              </PostTitle>
              <PostText>
                첫눈 오는 이런 오후에 너에게 전화를 걸 수만 있다면 기쁠 텐데
                벌써 일년이 지났는데 난 아직 미련 가득해서 쓸쓸...
              </PostText>
              <BottomWrap>
                <PostInfoWrap>
                  <PostInfo>방금 전</PostInfo>
                  <PostInfo>·</PostInfo>
                  <PostInfo>0개의 댓글</PostInfo>
                </PostInfoWrap>
                <InfoWrap>
                  <UserInfo>
                    <UserImage src={test} alt="test" />
                    다람지
                  </UserInfo>
                  <LikeContainer>
                    <LikeIcon />0
                  </LikeContainer>
                </InfoWrap>
              </BottomWrap>
            </PostItem>
            {/* <PostItem to="/Page1">
              <SwiperWrap>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                </Swiper>
              </SwiperWrap>
              <PostTitle>
                나의 단점 중 하나를 고칠 수...
                <MoodImage src={happy} alt="happy" />
              </PostTitle>
              <PostText>
                첫눈 오는 이런 오후에 너에게 전화를 걸 수만 있다면 기쁠 텐데
                벌써 일년이 지났는데 난 아직 미련 가득해서 쓸쓸...
              </PostText>
              <BottomWrap>
                <PostInfoWrap>
                  <PostInfo>방금 전</PostInfo>
                  <PostInfo>·</PostInfo>
                  <PostInfo>0개의 댓글</PostInfo>
                </PostInfoWrap>
                <InfoWrap>
                  <UserInfo>
                    <UserImage src={test} alt="test" />
                    다람지
                  </UserInfo>
                  <LikeContainer>
                    <LikeIcon />0
                  </LikeContainer>
                </InfoWrap>
              </BottomWrap>
            </PostItem>
            <PostItem to="/Page1">
              <SwiperWrap>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                </Swiper>
              </SwiperWrap>
              <PostTitle>
                나의 단점 중 하나를 고칠 수...
                <MoodImage src={happy} alt="happy" />
              </PostTitle>
              <PostText>
                첫눈 오는 이런 오후에 너에게 전화를 걸 수만 있다면 기쁠 텐데
                벌써 일년이 지났는데 난 아직 미련 가득해서 쓸쓸...
              </PostText>
              <BottomWrap>
                <PostInfoWrap>
                  <PostInfo>방금 전</PostInfo>
                  <PostInfo>·</PostInfo>
                  <PostInfo>0개의 댓글</PostInfo>
                </PostInfoWrap>
                <InfoWrap>
                  <UserInfo>
                    <UserImage src={test} alt="test" />
                    다람지
                  </UserInfo>
                  <LikeContainer>
                    <LikeIcon />0
                  </LikeContainer>
                </InfoWrap>
              </BottomWrap>
            </PostItem>
            <PostItem to="/Page1">
              <SwiperWrap>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                </Swiper>
              </SwiperWrap>
              <PostTitle>
                나의 단점 중 하나를 고칠 수...
                <MoodImage src={happy} alt="happy" />
              </PostTitle>
              <PostText>
                첫눈 오는 이런 오후에 너에게 전화를 걸 수만 있다면 기쁠 텐데
                벌써 일년이 지났는데 난 아직 미련 가득해서 쓸쓸...
              </PostText>
              <BottomWrap>
                <PostInfoWrap>
                  <PostInfo>방금 전</PostInfo>
                  <PostInfo>·</PostInfo>
                  <PostInfo>0개의 댓글</PostInfo>
                </PostInfoWrap>
                <InfoWrap>
                  <UserInfo>
                    <UserImage src={test} alt="test" />
                    다람지
                  </UserInfo>
                  <LikeContainer>
                    <LikeIcon />0
                  </LikeContainer>
                </InfoWrap>
              </BottomWrap>
            </PostItem>
            <PostItem to="/Page1">
              <SwiperWrap>
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperImage src={test} alt="test1" />
                  </SwiperSlide>
                </Swiper>
              </SwiperWrap>
              <PostTitle>
                나의 단점 중 하나를 고칠 수...
                <MoodImage src={happy} alt="happy" />
              </PostTitle>
              <PostText>
                첫눈 오는 이런 오후에 너에게 전화를 걸 수만 있다면 기쁠 텐데
                벌써 일년이 지났는데 난 아직 미련 가득해서 쓸쓸...
              </PostText>
              <BottomWrap>
                <PostInfoWrap>
                  <PostInfo>방금 전</PostInfo>
                  <PostInfo>·</PostInfo>
                  <PostInfo>0개의 댓글</PostInfo>
                </PostInfoWrap>
                <InfoWrap>
                  <UserInfo>
                    <UserImage src={test} alt="test" />
                    다람지
                  </UserInfo>
                  <LikeContainer>
                    <LikeIcon />0
                  </LikeContainer>
                </InfoWrap>
              </BottomWrap>
            </PostItem> */}
          </PostContainer>
        </PostWrap>
      </Layout>
    </>
  );
}
