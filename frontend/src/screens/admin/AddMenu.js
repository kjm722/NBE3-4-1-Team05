import React, { useState } from "react";
import { addMenu } from "../../DL/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AddMenu = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null); // 업로드할 파일
    const [menuData, setMenuData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
    });
    

    // 파일 선택 처리
    const inputImage = (e) => {
        setFile(e.target.files[0]);
    };

    // 메뉴 데이터 입력 처리
    const inputMenu = (e) => {
        const { name, value } = e.target;
        setMenuData({ ...menuData, [name]: value });
    };

    // 메뉴 추가 처리
    const submitMenu = async (e) => {
        e.preventDefault();
    
        try {
            if (!file) {
                throw new Error("이미지를 선택해주세요.");
            }
            if (!menuData.name || !menuData.price || !menuData.stock) {
                throw new Error("필수 항목을 모두 입력해주세요.");
            }
    
            // 메뉴 데이터와 이미지를 함께 전송
            const menuRequestData = {
                productName: menuData.name,
                description: menuData.description,
                price: menuData.price,
                stock: menuData.stock
            };
            
            await addMenu(menuRequestData, file);
            console.log(file);
        
            alert("메뉴가 성공적으로 추가되었습니다!");
            navigate("/admin/menus");
            window.location.reload();  // 페이지 새로고침
        } catch (err) {
            alert(err.message);
        }
    };
    return (
        <div className="flex flex-col items-center w-full h-screen bg-gray-100 p-8">
            <Navbar />
            <h1 className="text-2xl font-bold mb-8">상품 추가 / 수정</h1>
            <form
                onSubmit={submitMenu}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl flex"
            >
                {/* 이미지 업로드 */}
                <div className="flex flex-col items-center justify-center w-1/3">
                    <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                        {/* 파일 업로드 미리보기 이미지 */}
                        {file ? (
                            <img
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        ) : (
                            <div className="text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 16l3.582-3.582a2 2 0 012.836 0L12 15.586l1.582-1.582a2 2 0 012.836 0L21 16M5 16v4h14v-4M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
                                    />
                                </svg>
                                <p className="text-sm mt-2">이미지 미리보기</p>
                            </div>
                        )}
                    </div>
                    <label className="w-full">
                        <input
                            type="file"
                            onChange={inputImage}
                            className="hidden"
                        />
                        <div className="bg-gray-700 text-white text-center py-2 rounded-lg cursor-pointer hover:bg-gray-800">
                            이미지 업로드
                        </div>
                    </label>
                </div>

                {/* 메뉴 정보 입력 */}
                <div className="w-2/3 pl-8">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            상품명
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={menuData.name}
                            onChange={inputMenu}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="상품명 입력"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            상세 설명
                        </label>
                        <textarea
                            name="description"
                            value={menuData.description}
                            onChange={inputMenu}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="상품 설명 입력"
                        />
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                                가격
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={menuData.price}
                                onChange={inputMenu}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="가격 입력"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                                수량
                            </label>
                            <input
                                type="number"
                                name="stock"
                                value={menuData.stock}
                                onChange={inputMenu}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="수량 입력"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="submit"
                            className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
                        >
                            등록
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition"
                            onClick={() => navigate("/admin/menus")}
                        >
                            취소
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddMenu;
