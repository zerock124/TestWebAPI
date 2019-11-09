﻿using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using TestWebAPI.Models;

namespace TestWebAPI.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        protected IDbSet<TEntity> dbSet { get; set; }   //使用 Entity Framework 的機制

        public DbContext _context { get; set; }

        public GenericRepository()
            : this(new Database1Entities())
        {
        }

        public GenericRepository(DbContext context)
        {
            this._context = context ?? throw new ArgumentNullException("context");

            this.dbSet = this._context.Set<TEntity>();
        }

        /// <summary>
        /// 新增資料到指定實體
        /// </summary>
        /// <param name="instance">資料實體</param>
        /// <exception cref="System.ArgumentNullException">資料實體</exception>
        public void Create(TEntity instance)
        {
            if (instance == null)
            {
                throw new ArgumentNullException("instance");
            }
            else
            {
                this._context.Set<TEntity>().Add(instance);
                this.SaveChanges();
            }
        }

        /// <summary>
        /// 更新資料到指定實體
        /// </summary>
        /// <param name="instance">資料實體</param>
        /// <exception cref="System.NotImplementedException"></exception>
        public void Update(TEntity instance)
        {
            if (instance == null)
            {
                throw new ArgumentNullException("instance");
            }
            else
            {
                this._context.Entry(instance).State = EntityState.Modified;
                this.SaveChanges();
            }
        }

        /// <summary>
        /// 由資料實體刪除資料
        /// </summary>
        /// <param name="instance">資料實體</param>
        /// <exception cref="System.NotImplementedException"></exception>
        public void Delete(TEntity instance)
        {
            if (instance == null)
            {
                throw new ArgumentNullException("instance");
            }
            else
            {
                this._context.Entry(instance).State = EntityState.Deleted;
                this.SaveChanges();
            }
        }

        /// <summary>
        /// 儲存
        /// </summary>
        public void SaveChanges()
        {
            this._context.SaveChanges();
        }

        /// <summary>
        /// 根據條件尋找 TEntity
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public IQueryable<TEntity> FindBy(Expression<Func<TEntity, bool>> predicate)
        {
            return this.dbSet.Where(predicate);
        }

        /// <summary>
        /// 取得所有資料
        /// </summary>
        /// <returns></returns>
        public IQueryable<TEntity> GetAll()
        {
            return this._context.Set<TEntity>().AsQueryable();
        }

        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this._context != null)
                {
                    this._context.Dispose();
                    this._context = null;
                }
            }
        }

    }
}
