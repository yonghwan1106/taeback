// 태백 고원 스포츠 명품도시
// Taebaek Highland Sports Excellence City

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 헤더 스크롤 효과
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section');
    
    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        // 헤더 색상 변경
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 현재 섹션 하이라이트
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // 모바일 메뉴 토글
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // 탭 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 모든 탭 버튼에서 active 클래스 제거
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 모든 탭 패널에서 active 클래스 제거
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });
            
            // 클릭한 탭과 해당 패널에 active 클래스 추가
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 프로젝트 모달
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalPlaceholder = document.getElementById('modal-placeholder');
    const modalIcon = document.getElementById('modal-icon');
    const modalImageText = document.getElementById('modal-image-text');
    const modalDescription = document.getElementById('modal-description');
    const modalLocation = document.getElementById('modal-location');
    const modalFacilities = document.getElementById('modal-facilities');
    const modalBudget = document.getElementById('modal-budget');
    const modalEffects = document.getElementById('modal-effects');
    const modalTimeline = document.getElementById('modal-timeline');
    
    // 프로젝트 데이터
    const projectData = {
        '태백 고지대 스포츠 과학센터': {
            icon: 'fas fa-dumbbell',
            description: '태백 고지대 스포츠 과학센터는 국내 유일의 고원 도시인 태백의 지리적 강점을 활용한 전문 훈련 시설입니다. 이 센터는 엘리트 선수들의 고지대 트레이닝과 일반인들의 건강 증진을 위한 과학적 기반 시설을 제공합니다.',
            location: '하이원 리조트 인근 부지, 연면적 15,000㎡ 규모',
            facilities: [
                '저산소 훈련실 (3종): 해발 2,000m/2,500m/3,000m 시뮬레이션 환경',
                '생리학 테스트랩: VO2max, 젖산역치, 근력분석 등 종합검사시설',
                '실내 육상 트랙: 200m 실내 트랙, 스마트 페이싱 시스템 구축',
                '멀티스포츠 훈련장: 배구, 농구, 핸드볼 등 실내 종목 훈련 공간',
                '생체역학 분석실: 3D 동작분석, 지면반력 측정, 파워분석 시스템'
            ],
            budget: '초기 시설 구축 250억원, 연간 운영비 25억원',
            effects: [
                '국내외 전문팀 100개 이상, 연인원 5,000명 이상 유치',
                '고지대 훈련 경쟁력 확보로 국내 스포츠 경쟁력 강화',
                '지역 고용 창출 효과: 직접 고용 80명 이상',
                '체류형 관광객 증가로 지역 경제 활성화'
            ],
            timeline: [
                { time: '2025년 1-6월', event: '설계 및 인허가 획득' },
                { time: '2025년 7월-2026년 6월', event: '센터 건립 공사' },
                { time: '2026년 7-8월', event: '시범 운영 및 시스템 점검' },
                { time: '2026년 9월', event: '그랜드 오픈 및 국제 대회 유치' }
            ]
        },
        '국제 트레일러닝 네트워크': {
            icon: 'fas fa-running',
            description: '태백의 아름다운 고원 산악 환경을 활용한 국제 표준의 트레일러닝 코스 네트워크입니다. ITRA(국제 트레일러닝 협회) 인증을 받은 다양한 난이도의 코스를 개발하여 국내외 트레일러너들을 위한 명품 러닝 환경을 조성합니다.',
            location: '태백산 국립공원 및 주변 산림지역, 총 연장 170km 코스',
            facilities: [
                'ITRA 인증 코스 3종: 블루코스(20km), 레드코스(50km), 블랙코스(100km)',
                '안전시설: 5km마다 응급지원소, 위치추적 시스템, 무선통신망',
                '편의시설: 20개 급수/보급소, 10개 휴게쉼터, 5개 전망대',
                '스마트 트레일: GPS 맵핑, AR 내비게이션, 실시간 기상정보'
            ],
            budget: '초기 인프라 구축 70억원, 연간 유지보수 및 대회운영 15억원',
            effects: [
                '연간 국내외 트레일러너 20,000명 이상 유치',
                '태백 울트라 트레일 챌린지를 통한 지역 브랜드 가치 상승',
                '산악 관광 활성화 및 체류형 관광객 증가',
                '지역 가이드 및 운영 인력 일자리 창출'
            ],
            timeline: [
                { time: '2025년 1-6월', event: '코스 설계 및 환경 영향 평가' },
                { time: '2025년 7-12월', event: '1차 코스(블루코스) 개발 및 시설물 설치' },
                { time: '2026년 1-6월', event: '2차 코스(레드코스) 개발 및 ITRA 인증 신청' },
                { time: '2026년 7-12월', event: '3차 코스(블랙코스) 개발 및 첫 대회 개최' }
            ]
        },
        '산악자전거 특화지구': {
            icon: 'fas fa-bicycle',
            description: '태백의 고원 지형과 경사를 활용한 국내 최대 규모의 산악자전거(MTB) 특화지구입니다. 다양한 난이도의 코스와 전문 훈련 시설을 갖춰 국내외 MTB 라이더들의 성지로 발전시킵니다.',
            location: '태백 함백산 일원, 총 면적 3.8㎢',
            facilities: [
                '다운힐 코스(3개): 초급(3km), 중급(5km), 고급(7km), 총 고도차 1,200m',
                '크로스컨트리 코스(5개): 총 연장 120km, 난이도별 구분',
                '펌프트랙/스킬파크: 초보자 교육용 5,000㎡ 규모 시설',
                '바이크 스테이션 4개소: 대여, 수리, 세척, 보관 서비스'
            ],
            budget: '초기 조성 110억원, 연간 운영 10억원',
            effects: [
                '연간 국내외 MTB 방문객 30,000명 이상 유치',
                '국제 대회 유치를 통한 태백시 브랜드 강화',
                '겨울철 외 MTB 활동으로 사계절 관광 균형 달성',
                '지역 청년 일자리 창출 및 관광 수입 증대'
            ],
            timeline: [
                { time: '2025년 3-8월', event: '부지 정비 및 기본 코스 설계' },
                { time: '2025년 9월-2026년 4월', event: '주요 코스 및 시설 조성' },
                { time: '2026년 5-6월', event: '시범 운영 및 안전성 검증' },
                { time: '2026년 7월', event: '태백 MTB 페스티벌 개최 및 정식 개장' }
            ]
        },
        '탄광 어드벤처 코스': {
            icon: 'fas fa-mountain',
            description: '태백의 산업유산인 폐광 시설을 창의적으로 활용한 독특한 스포츠 어드벤처 공간입니다. 탄광의 역사적 가치를 보존하면서 현대적인 스포츠 활동 공간으로 재탄생시킵니다.',
            location: '태백 철암동 일원 폐광 시설, 총 면적 22,000㎡',
            facilities: [
                '지하 MTB 코스: 폐광 갱도 활용 실내 MTB 트랙 1.5km',
                '마인 클라이밍: 갱내 암벽등반 코스 30개 루트',
                '탄광 케이빙 어드벤처: 동굴탐험+역사체험 결합 투어',
                '와이어타워 집라인: 탄광 시설물 활용 어드벤처 시설'
            ],
            budget: '시설 개발 80억원, 연간 운영 8억원',
            effects: [
                '연간 방문객 10만명 이상 유치',
                '태백 산업유산의 창의적 보존 및 활용 모델 구축',
                '독특한 체험 콘텐츠로 차별화된 관광 경쟁력 확보',
                '지역 고용 창출 및 도시 재생 효과'
            ],
            timeline: [
                { time: '2025년 3-9월', event: '부지 안전성 검토 및 기본 계획 수립' },
                { time: '2025년 10월-2026년 5월', event: '시설 조성 및 안전 설비 구축' },
                { time: '2026년 6-7월', event: '파일럿 투어 및 안전 점검' },
                { time: '2026년 8월', event: '정식 개장 및 탄광 문화제와 연계 행사' }
            ]
        }
    };

    // 모달 열기
    if (projectLinks.length > 0 && modal) {
        projectLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 프로젝트 제목 가져오기
                const projectTitle = this.closest('.project-info').querySelector('h3').textContent;
                const project = projectData[projectTitle];
                
                if (project) {
                    // 모달 내용 채우기
                    modalTitle.textContent = projectTitle;
                    
                    // 이미지 대신 아이콘으로 표시
                    if (modalIcon) {
                        modalIcon.innerHTML = `<i class="${project.icon}"></i>`;
                    }
                    
                    if (modalImageText) {
                        modalImageText.textContent = projectTitle;
                    }
                    
                    if (modalDescription) {
                        modalDescription.textContent = project.description;
                    }
                    
                    if (modalLocation) {
                        modalLocation.textContent = project.location;
                    }
                    
                    if (modalBudget) {
                        modalBudget.textContent = project.budget;
                    }
                    
                    // 시설 목록 채우기
                    if (modalFacilities) {
                        modalFacilities.innerHTML = '';
                        project.facilities.forEach(facility => {
                            const li = document.createElement('li');
                            li.textContent = facility;
                            modalFacilities.appendChild(li);
                        });
                    }
                    
                    // 효과 목록 채우기
                    if (modalEffects) {
                        modalEffects.innerHTML = '';
                        project.effects.forEach(effect => {
                            const li = document.createElement('li');
                            li.textContent = effect;
                            modalEffects.appendChild(li);
                        });
                    }
                    
                    // 타임라인 채우기
                    if (modalTimeline) {
                        modalTimeline.innerHTML = '';
                        project.timeline.forEach(item => {
                            const timelineItem = document.createElement('div');
                            timelineItem.className = 'modal-timeline-item';
                            
                            const time = document.createElement('div');
                            time.className = 'time';
                            time.textContent = item.time;
                            
                            const event = document.createElement('div');
                            event.className = 'event';
                            event.textContent = item.event;
                            
                            timelineItem.appendChild(time);
                            timelineItem.appendChild(event);
                            modalTimeline.appendChild(timelineItem);
                        });
                    }
                    
                    // 모달 표시
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // 스크롤 방지
                }
            });
        });
    }
    
    // 모달 닫기
    if (modalClose && modal) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // 스크롤 허용
        });
    }
    
    // 모달 외부 클릭 시 닫기
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // 스크롤 허용
            }
        });
    }
    
    // 숫자 카운터 애니메이션
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter() {
        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2초 동안 애니메이션
            const step = target / (duration / 20); // 20ms마다 업데이트
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 20);
        });
    }
    
    // 요소가 화면에 보일 때 애니메이션 시작
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 비전 섹션이 화면에 보일 때 카운터 애니메이션 시작
                if (entry.target.classList.contains('vision')) {
                    animateCounter();
                }
                
                // 관찰 중단 (한 번만 실행)
                observer.unobserve(entry.target);
            }
        });
    }
    
    // Intersection Observer 설정
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3 // 30% 이상 보일 때 실행
    });
    
    // 비전 섹션 관찰 시작
    const visionSection = document.querySelector('.vision');
    if (visionSection) {
        observer.observe(visionSection);
    }
    
    // 갤러리 아이템 애니메이션
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        // 스크롤 시 순차적으로 나타나는 효과
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // 갤러리 섹션이 화면에 보일 때 아이템 표시
    const gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        const galleryObserver = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                galleryItems.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                });
                galleryObserver.unobserve(gallerySection);
            }
        }, { threshold: 0.3 });
        
        galleryObserver.observe(gallerySection);
    }
    
    // 연락처 폼 제출 처리
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 폼 데이터 수집
            const formData = new FormData(this);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // 실제 구현에서는 서버로 데이터 전송
            console.log('폼 데이터:', formValues);
            
            // 성공 메시지 표시
            alert('메시지가 성공적으로 전송되었습니다. 감사합니다!');
            
            // 폼 초기화
            this.reset();
        });
    }
    
    // 스크롤 애니메이션
    const animatedElements = document.querySelectorAll('.section-header, .vision-text, .tab-container, .project-card, .effect-item, .timeline-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease';
    });
    
    const animationObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
    
    // 페이지 로드 시 히어로 섹션 애니메이션
    window.addEventListener('load', function() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    });
});
