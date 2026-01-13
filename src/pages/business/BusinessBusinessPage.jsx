import React, { useRef, useState } from 'react'
import { useTheme } from '../../ThemeContext'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../contexts/LanguageContext'

const customSelect =
  'appearance-none flex-1 bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px]';

const emptyProduct = { name: '', category: '', media: null };

const AdminBusinessPage = () => {
  const { isDark } = useTheme()
  const { t } = useTranslation()
  const { isRTL } = useLanguage()

  // State for file inputs
  const [businessLogo, setBusinessLogo] = useState(null);
  const [businessCert, setBusinessCert] = useState(null);
  const [products, setProducts] = useState([
    { ...emptyProduct },
    { ...emptyProduct },
  ]);

  // Refs for file inputs
  const logoInputRef = useRef();
  const certInputRef = useRef();
  const mediaInputRefs = useRef([]);

  // Handlers
  const handleFileChange = (idx) => (e) => {
    const file = e.target.files[0];
    setProducts((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], media: file };
      return copy;
    });
  };

  const handleDrop = (idx) => (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setProducts((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], media: file };
      return copy;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleProductChange = (idx, field) => (e) => {
    const value = e.target.value;
    setProducts((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  };

  const addMoreProducts = () => {
    setProducts((prev) => [...prev, { ...emptyProduct }]);
  };

  const deleteProduct = (idx) => {
    setProducts((prev) => prev.filter((_, i) => i !== idx));
  };

  // Business logo and cert handlers remain the same
  const [businessLogoRef] = [useRef()];
  const [businessCertRef] = [useRef()];
  const [businessLogoState, setBusinessLogoState] = useState(null);
  const [businessCertState, setBusinessCertState] = useState(null);

  return (
    <div className={`transition-colors min-h-screen ${isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"}`}>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Business Information */}
        <h2 className="text-lg font-bold mb-4">{t('business.profile.businessInfo')}</h2>
        <div
          className="bg-[#22304A] rounded-xl p-8 flex flex-col items-center justify-center mb-4 cursor-pointer border-2 border-dashed border-[#4169E1] hover:bg-[#26314a] transition-colors"
          onClick={() => businessLogoRef.current.click()}
          onDrop={(e) => { e.preventDefault(); setBusinessLogoState(e.dataTransfer.files[0]); }}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            ref={businessLogoRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => setBusinessLogoState(e.target.files[0])}
          />
          <div className="flex flex-col items-center">
            <span className="text-3xl text-gray-400 mb-2">+</span>
            <span className="text-gray-400">
              {businessLogoState ? businessLogoState.name : t('business.profile.dragDropLogo')}
            </span>
          </div>
        </div>
        <div className="flex gap-4 mb-4 relative">
          <select className={customSelect}>
            <option>{t('business.profile.selectCategory')}</option>
          </select>
          <span className={`pointer-events-none absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 text-lg`}>▼</span>
        </div>
        <div className="flex gap-4 mb-4">
          <input 
            className="flex-1 bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px]" 
            placeholder={t('business.profile.enterBusinessName')} 
            dir={isRTL ? 'rtl' : 'ltr'}
          />
          <input 
            className="flex-1 bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px]" 
            placeholder={t('business.profile.enterWebsite')} 
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>
        <div className="mb-8">
          <input 
            className="w-full bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px]" 
            placeholder={t('business.profile.enterDescription')} 
            dir={isRTL ? 'rtl' : 'ltr'}
          />
        </div>

        {/* Business Verification */}
        <h2 className="text-lg font-bold mb-4">{t('business.profile.verification')}</h2>
        <div
          className="bg-[#22304A] rounded-xl p-8 flex flex-col items-center justify-center mb-4 cursor-pointer border-2 border-dashed border-[#4169E1] hover:bg-[#26314a] transition-colors"
          onClick={() => businessCertRef.current.click()}
          onDrop={(e) => { e.preventDefault(); setBusinessCertState(e.dataTransfer.files[0]); }}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            ref={businessCertRef}
            className="hidden"
            onChange={(e) => setBusinessCertState(e.target.files[0])}
          />
          <div className="flex flex-col items-center">
            <span className="text-3xl text-gray-400 mb-2">+</span>
            <span className="text-gray-400">
              {businessCertState ? businessCertState.name : t('business.profile.dragDropCert')}
            </span>
          </div>
        </div>
        <div className="flex gap-4 mb-8 relative">
          <select className={customSelect}>
            <option>{t('business.profile.verified')}</option>
          </select>
          <span className={`pointer-events-none absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 text-lg`}>▼</span>
        </div>

        {/* Products Information */}
        <h2 className="text-lg font-bold mb-4">{t('business.profile.productsInfo')}</h2>
        {products.map((product, idx) => (
          <div key={idx} className="mb-6 relative">
            {idx > 0 && (
              <button
                type="button"
                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg z-10 hover:bg-red-600"
                onClick={() => deleteProduct(idx)}
                aria-label={t('common.delete')}
              >
                ×
              </button>
            )}
            <div className="flex gap-4 mb-4">
              <input
                className="flex-1 bg-[#22304A] text-gray-400 rounded-lg px-4 py-3 focus:outline-none h-[48px]"
                placeholder={t('business.profile.enterProductName')}
                value={product.name}
                onChange={handleProductChange(idx, 'name')}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
              <div className="relative flex-1">
                <select
                  className={customSelect}
                  value={product.category}
                  onChange={handleProductChange(idx, 'category')}
                >
                  <option value="">{t('business.profile.selectProductCategory')}</option>
                  <option value="cat1">{t('business.profile.category1')}</option>
                  <option value="cat2">{t('business.profile.category2')}</option>
                </select>
                <span className={`pointer-events-none absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400 text-lg`}>▼</span>
              </div>
            </div>
            <div
              className="bg-[#22304A] rounded-xl p-8 flex flex-col items-center justify-center mb-4 cursor-pointer border-2 border-dashed border-[#4169E1] hover:bg-[#26314a] transition-colors"
              onClick={() => mediaInputRefs.current[idx]?.click()}
              onDrop={handleDrop(idx)}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                ref={el => (mediaInputRefs.current[idx] = el)}
                className="hidden"
                onChange={handleFileChange(idx)}
              />
              <div className="flex flex-col items-center">
                <span className="text-3xl text-gray-400 mb-2">+</span>
                <span className="text-gray-400">
                  {product.media ? product.media.name : t('business.profile.uploadMedia')}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div
          className="bg-[#22304A] rounded-xl p-4 flex items-center justify-center mb-6 cursor-pointer text-gray-400"
          onClick={addMoreProducts}
        >
          <span className="text-xl mr-2">+</span> {t('business.profile.addMoreProducts')}
        </div>
        <button className="bg-[#4169E1] text-white px-8 py-3 rounded-lg font-semibold mt-2">{t('common.upload')}</button>
      </div>
    </div>
  )
}

export default AdminBusinessPage