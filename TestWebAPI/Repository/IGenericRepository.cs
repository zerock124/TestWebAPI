using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace TestWebAPI.Repositories
{
    /// <summary>
    /// 資料存取層/通用型 - 介面 (代表一個Repository的interface。)
    /// </summary>
    /// <typeparam name="T">任意model的class</typeparam>
    public interface IGenericRepository<TEntity> : IDisposable where TEntity : class
    {
        DbContext _context { get; set; }

        /// <summary>
        /// 新增一筆資料。
        /// </summary>
        /// <param name="instance">要新增的Entity</param>
        void Create(TEntity instance);

        /// <summary>
        /// 更新一筆資料的內容。
        /// </summary>
        /// <param name="instance">要更新的內容</param>
        void Update(TEntity instance);

        /// <summary>
        /// 刪除一筆資料內容。
        /// </summary>
        /// <param name="instance">要被刪除的Entity。</param>
        void Delete(TEntity instance);

        /// <summary>
        /// 根據條件尋找 TEntity
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        IQueryable<TEntity> FindBy(Expression<Func<TEntity, bool>> predicate);

        /// <summary>
        /// 取得所有資料
        /// </summary>
        /// <returns></returns>
        IQueryable<TEntity> GetAll();


    }
}
