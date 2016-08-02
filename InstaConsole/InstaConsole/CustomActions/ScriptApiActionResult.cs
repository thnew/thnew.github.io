using Newtonsoft.Json;
using System;
using System.Web.Mvc;

public class ScriptApiActionResult : JavaScriptResult
{
    private string TargetAttribute { get; set; }
    private object Data { get; set; }
    private string Error { get; set; }

    public ScriptApiActionResult(string targetAttribute, object data)
    {
        if (string.IsNullOrEmpty(targetAttribute))
        {
            throw new ArgumentNullException("Target attribute is null or empty");
        }

        this.TargetAttribute = targetAttribute;
        this.Data = data;
        this.Error = null;
    }

    public ScriptApiActionResult(string targetAttribute, object data, string error) : this(targetAttribute, data)
    {
        this.Error = Error;
    }


    public override void ExecuteResult(ControllerContext context)
    {
        var data = (this.Data != null ? JsonConvert.SerializeObject(this.Data) : "null");
        var error = this.Error != null ? "'" + this.Error  + "'" : "null";

        this.Script = "var " + this.TargetAttribute + " = { success: true, data: " + data + ", error: " + error + " };";

        base.ExecuteResult(context);
    }
}