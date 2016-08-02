using InstaConsole.Exceptions.ScriptApiExceptions;
using InstaConsole.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InstaConsole.Controllers.ModelBinders
{
    public class FollowerApiDtoModelBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            HttpRequestBase request = controllerContext.HttpContext.Request;

            ValueProviderResult val = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

            var queryParam = HttpUtility.ParseQueryString(request.Url.Query);

            var authUsername = queryParam["authUsername"];
            var authDatetime = queryParam["authDatetime"];
            var authHash = queryParam["authHash"];

            var targetAttribute = queryParam["targetAttribute"];

            if (String.IsNullOrEmpty(targetAttribute))
            {
                throw new TargetAttributeNotSetException();
            }

            // Read username from route
            ValueProviderResult routeUserName = bindingContext.ValueProvider.GetValue("username");
            var userName = routeUserName.AttemptedValue;

            DateTime followedSince;
            DateTime unfollowedAt;

            DateTime.TryParse(queryParam["followedSince"], out followedSince);
            DateTime.TryParse(queryParam["unfollowedAt"], out unfollowedAt);
            
            return new FollowerApiDto
            {
                TargetAttribute = targetAttribute,

                Username = userName,

                FollowedSince = followedSince,
                UnfollowedAt = unfollowedAt
            };
        }
    }
}